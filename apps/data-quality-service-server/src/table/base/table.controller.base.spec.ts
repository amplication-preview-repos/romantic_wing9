import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { TableController } from "../table.controller";
import { TableService } from "../table.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  description: "exampleDescription",
  creationDate: new Date(),
  lastUpdate: new Date(),
  owner: "exampleOwner",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  description: "exampleDescription",
  creationDate: new Date(),
  lastUpdate: new Date(),
  owner: "exampleOwner",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "exampleName",
    description: "exampleDescription",
    creationDate: new Date(),
    lastUpdate: new Date(),
    owner: "exampleOwner",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  description: "exampleDescription",
  creationDate: new Date(),
  lastUpdate: new Date(),
  owner: "exampleOwner",
};

const service = {
  createTable() {
    return CREATE_RESULT;
  },
  tables: () => FIND_MANY_RESULT,
  table: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Table", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TableService,
          useValue: service,
        },
      ],
      controllers: [TableController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /tables", async () => {
    await request(app.getHttpServer())
      .post("/tables")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        creationDate: CREATE_RESULT.creationDate.toISOString(),
        lastUpdate: CREATE_RESULT.lastUpdate.toISOString(),
      });
  });

  test("GET /tables", async () => {
    await request(app.getHttpServer())
      .get("/tables")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          creationDate: FIND_MANY_RESULT[0].creationDate.toISOString(),
          lastUpdate: FIND_MANY_RESULT[0].lastUpdate.toISOString(),
        },
      ]);
  });

  test("GET /tables/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tables"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tables/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tables"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        creationDate: FIND_ONE_RESULT.creationDate.toISOString(),
        lastUpdate: FIND_ONE_RESULT.lastUpdate.toISOString(),
      });
  });

  test("POST /tables existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/tables")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        creationDate: CREATE_RESULT.creationDate.toISOString(),
        lastUpdate: CREATE_RESULT.lastUpdate.toISOString(),
      })
      .then(function () {
        agent
          .post("/tables")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
