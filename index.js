const Hapi = require('@hapi/hapi');

const init = async () => {

    // criando uma instancia do servidor

    const server = Hapi.server ({      //especificando uma conecção(interagir com o servidor)=>informaçõe de conecção
        port: 8080, 
        host: 'localhost'             //server.connection ({port:8080, host: '0.0.0.0' }) 
    //porta 8080 -  atraves do zero. zero ele vai escutar em todas as interfaces de rede do computador
    }); 

    await server.start();
    console.log('Server running on %s', server.info.uri);


};

process.on ('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

