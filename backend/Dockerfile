# project is actually on 3.9.9 on openjdk-21 but this is closest matching version
FROM maven:3.9.8-eclipse-temurin-21 AS build

# setting the working directory
WORKDIR /backend

COPY ./pom.xml .
COPY ./src ./src

# building the application
RUN mvn clean package -Dmaven.test.skip=true

FROM openjdk:21-jdk

WORKDIR /backend

COPY --from=build /backend/target/*.jar backend.jar

# exposing the port on which springboot backend will run
EXPOSE 8080

CMD ["java", "-jar", "backend.jar"]