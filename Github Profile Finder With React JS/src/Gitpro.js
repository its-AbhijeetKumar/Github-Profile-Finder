import React from 'react'
import './App.css';

const GitPro = ({data}) => {
    return (
        <>
          <div className="border">
            <center><p><img src={data?.avatar_url} alt="Avatar" /></p></center>
            <table>
                <tr><p><center></center></p></tr>
                <tr>
                    <th></th>
                </tr>
                <tr>####################################################</tr>
                <tr><div className="coll"><center><b><u>ID</u></b>:<i className="roll">{data.id}</i></center></div></tr>
                <tr><div className="coll"><center><b><u>Name</u></b>:<i className="roll">{data.login}</i></center></div></tr>
                <tr><div className="coll"><center><b><u>FOLLOWERS</u></b>:<i className="roll">{data.followers}</i></center></div></tr>
                <tr><div className="coll"><center><b><u>FOLLOWING</u></b>:<i className="roll">{data.following}</i></center></div></tr>
            </table>
            
            
            
            
          </div>
     
        </>
    )
}

export default GitPro
