// Shree Ganeshay namah 
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import auth from '../Redux/firefox'
import { useEffect, useState } from "react";

function GoogleAuth() {

    const [user, setuser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                setuser(user)
            } else {
                // User is signed out
                // ...
                setuser(null)
            }
        });
    }, [user])



    function login() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            })
    }

    return (
        <>

            {
                user ?

                  
                    <div className="card shadow-lg text-center p-4 mx-auto" style={{ width: "24rem" }}>
                        <img
                             src={user.photoURL}    
                            alt="User"
                            className="card-img-top rounded-circle mx-auto mt-3"
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{user.displayName}</h5>
                            <p className="card-text">{user.email}</p>
                            <button className="btn btn-danger mt-3" onClick={() => auth.signOut()}>
                                Sign Out
                            </button>
                        </div>
                    </div>

                    :
                    <div className=" container shadow mx-auto p-5  d-flex justify-content-center">

                      <button onClick={login} className="btn btn-danger ">Login WIth Google</button>
                    </div>

            }
        </>
    )
}

export default GoogleAuth