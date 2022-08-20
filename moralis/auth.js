const serverUrl = "https://ng4y2lkr9vmr.usemoralis.com:2053/server";
const appId = "V7831pa9kpO6d6tgcpP310IHEHUxGqqtjaDt6qEJ";
Moralis.start({ serverUrl, appId });

let user = Moralis.User.current();
login_metamask = async () => {
   
    if (!user) {
        await Moralis.enableWeb3()
        user = await Moralis.authenticate({
        signingMessage: "Log in using Moralis",
      })
        .then(function (user) {
          
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
        location.reload()
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}

logout = async () => {
    await Moralis.User.logOut();
    location.reload()
}




login_wallet_connect = async () => {
    try {
        await Moralis.Web3.authenticate(
            { 
                provider: "walletconnect", 
                mobileLinks: [
                  "rainbow",
                  "metamask",
                  "argent",
                  "trust",
                  "imtoken",
                  "pillar",
                ] 
            }
        );
        location.reload()
    } catch (error) {
        alert(error)
    }
}




if (!user) {
    
    document.getElementById("connect_wallet").style.display="show";
    document.getElementById("wallet_address").style.display="none";
}
else{
    run = async function (){
        await Moralis.enableWeb3()
    }

    run();
    console.log('yes')
    document.getElementById("connect_wallet").style.display="none";
    document.getElementById("wallet_address").style.display="show";


  

}
