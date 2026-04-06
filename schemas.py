from pydentic import BaseModal

class UserCreate(BaseModal):
    username: str
    email: str
    password: str

    class UserLogin(BaseModal):
        email: str
        password: str

 class UserOut(BaseModal):
    id: int
    username: str
   email: str   

class Config:
    orm_mode = True  

    class PostCreate(BaseModal):
        title: str
        content: str

    class PostOut(BaseModal):
        id: int
        title: str
        content: str
        author: str

        class Config:
            orm_mode = True    