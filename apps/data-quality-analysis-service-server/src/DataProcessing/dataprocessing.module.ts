import { Module } from "@nestjs/common";
import { DataProcessingService } from "./dataprocessing.service";
import { DataProcessingController } from "./dataprocessing.controller";
import { DataProcessingResolver } from "./dataprocessing.resolver";

@Module({
  controllers: [DataProcessingController],
  providers: [DataProcessingService, DataProcessingResolver],
  exports: [DataProcessingService],
})
export class DataProcessingModule {}
