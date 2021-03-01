import React from 'react';


const Film = ({children, url}) => {
return (
<>
<a href={url}>{children}</a>
<br></br>
</>
)

}

export default Film;