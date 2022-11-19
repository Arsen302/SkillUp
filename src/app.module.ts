import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';

@Module({
	controllers: [AppController],
	providers: [AppService],
	imports: [UserModule, CourseModule],
})
export class AppModule {}
