# Menage Manager TP Web APP

## START ALL SERVICES (db + api + web)

### For dev env
```sh
docker-compose -f docker-compose.dev.yml up -d --build
```

### For prod env
```shell
docker-compose -f docker-compose.prod.yml up -d --build
```


### Watch all services

#### For dev env
```shell
docker-compose -f docker-compose.dev.yml logs -f
```

#### For prod env
```shell
docker-compose -f docker-compose.prod.yml logs -f
```

### Running Services URLs

#### API
```shell
http://localhost:7100
```

#### Web
```shell
http://localhost:4300
```