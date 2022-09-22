const server = require ('./server');


const init = async () => {
	try {
		const serverInstance = await server;
    
		await serverInstance.start();
		console.log('Server running on %s', serverInstance.info.uri);
        
	} catch (error) {
		console.log('message: application startup error');
		console.log(error.message);
	}
};
init();

