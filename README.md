# NLWT-Node

# Anotações
## Paramentros
- Routes Params
    - Ex: `http://localhost:3000/produtos/:id ou {id}`

- Query Params
    - Ex: `http://localhost:3000/produtos?name=keyboard&&color=red `
- Body Params
    - Ex: 
        ```js  
        {
            "produto": "teclado",
            "cor": "vermelho"
        }
        ```
## ORM (Object Relational Mapper)
Fiz essa imagem pra definir um ORM (inspirada em uma que achei na net):
<img src='https://i.imgur.com/vI63mU8.png'>

- **Migrations**: Controle de versionamento de tabelas.

## JWT (Json Web Token)
Gera Tokens de Autenticação <br>
Ex: 
`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFlIiwiaWF0IjoxNjI2MjkxMTEzLCJleHAiOjE2MjYzNzc1MTMsInN1YiI6ImFhZjIyYmEwLWYwZGMtNDRlYy1hZGE0LTUxZDUzNTFkNWQzZSJ9.gw6zObPEuvCLuxNkPBDC53dfZY940OEt7aanD5MkC4k`

É igual a:
- Header
    ```json
        {
            "alg": "HS256",
            "typ": "JWT"
        }
    ```
- Payload
    ```json
        {
            "email": "ae",
            "iat": 1626291113,
            "exp": 1626377513,
            "sub": "aaf22ba0-f0dc-44ec-ada4-51d5351d5d3e"
        }
    ```
- Verify Signature
    ```js
        HMACSHA256( base64UrlEncode(header) + "." +  base64UrlEncode(payload), 'your-256-bit-secret')

    ```