if(response == true)
{
    document.querySelector(".tohead").textContent += `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
}
else
{
    document.querySelector(".tohead").textContent = "You're not welcome";
}

document.images['img_field'].src = `${imgPath}/${numeroImage}.${extension}`;
