import { useEffect, useState } from "react";


const GitHubUser = ({username}) => {
    // https://api.github.com/users/atapas

    const [ user, setUser] = useState (null);
    const [ error, setError] = useState (null);
    const [ loading, setLoading] = useState (false);

    useEffect (() => {
        // https://api.github.com/users/atapas

            const fetchData = async () => {
                setLoading(true);

                try {
                const response = await fetch(`https://api.github.com/users/${username}`);


                //  // Check rate limit headers
                //  const remaining = response.headers.get('X-RateLimit-Remaining');
                //  const resetTime = response.headers.get('X-RateLimit-Reset');
                //  setRateLimit({
                //      remaining: remaining,
                //      resetTime: new Date(resetTime * 1000)
                //  });
 
                //  if (response.status === 403) {
                //      throw new Error('API rate limit exceeded. Please try again later.');
                //  }


                  const responseData = await response.json();
                  setUser(responseData);
                  setLoading(false);
                  console.log(responseData);
                } catch (error) {
                    setError(error);
                    setLoading(false)
                }

            }

        fetchData();
    }, [username]);

 return (
    <div className="github-user">
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}

        {
        user && (
            <ul></ul>
        )
    }
    </div>

    
 )
  
  
};
export default GitHubUser;