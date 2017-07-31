const env=process.env;
export const serverConfig={
    port: env.PORT || 2020,
    host: env.HOST || 'localhost'
}

export const graphDb={
    user: 'neo4j',
    password: 'admin'
}

export const tokenSecret={
    jwtSecret:'averyseciresecretforjsonwebtoken'
}
