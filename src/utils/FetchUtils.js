import axios from 'axios';

/**
 * Fetch default
 */

class FetchUtils {

	postData = async(url, body, log) => {
    try {
		  const response = await axios.post(url, body)
			console.log(log,response);      
      return response;
		}
		catch(err) { 
			console.log("error ^^^^^^^",err)
			return err
		};
	} 

	getData = async (url,log) => {
		try {
      const response = await axios.get(url);
			console.log(log,response);            
			return response;
		}
		catch(err) {
			console.log("error ^^^^^^^",err)
			return err;
		}
	}

}

export default new FetchUtils();

