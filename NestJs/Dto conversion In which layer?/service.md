Service layer should always return DTOs..

Basically it speaks with daos and repositories and other services to give you back the DTOs.

Controllers are just entry points... Tomorrow if you would like to implement mq based communications, you could use the same service layer...
