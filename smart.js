function showFeature(featuretype){
    var selectedFeature=featuretype;
    var isAvailable=true;
    var message="";
}

if (isAvailable===true){
    switch(selectedFeature){
        case "health":
            message="❤️ NovaWatch helps you track daily activity.";
            break;

            case "notifications":
                message="🔔 Stay updated with smartphone notifications.";
                break;

                case "battery":
                    message="🔋 Enjoy dependable battery performance.";
                   break;
                   
                   default:
                    message="Welcome to NovaWatch!";
    }
}else{
    message="This feature is currently unavailable.";
}

var result=document.getElementById("featureMessage");

result.innerHTML=message;
result.style.display="block";
