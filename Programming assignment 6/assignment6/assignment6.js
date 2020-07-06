const ol = document.querySelector ("ol");
const favoriteMovies = [
    {
        name: "Interstellar",
        year:2014,
        director:"Christopher Nolan",
        pic: 'https://www.google.com/search?q=interstellar&rlz=1C1CHBF_enUS901US901&sxsrf=ALeKk00HvVwvlq-gdjdxkPLfFknPxb6ZWQ:1593993277067&tbm=isch&source=iu&ictx=1&fir=oiLKFjmOhDDUiM%252CLOvrb3QP8MZCTM%252C%252Fm%252F0fkf28&vet=1&usg=AI4_-kSWt0VYZW6WkGWd7hwz8xuq8Chw_w&sa=X&ved=2ahUKEwjQ0LbYp7fqAhWphOAKHUjaBb0Q_B0wGHoECA0QAw#imgrc=oiLKFjmOhDDUiM'
    },
    {
        name:"Cowboy Bebop:The Movie",
        year:2002,
        director:"Shinichiro Watanabe",
        pic: 'https://www.google.com/search?q=cowboy+bebop+movie&rlz=1C1CHBF_enUS901US901&sxsrf=ALeKk02DmT3znsETncbeFReNeU35RbP8wQ:1593993372439&tbm=isch&source=iu&ictx=1&fir=ZxVFVyg3ApcJ4M%252C5FLYq6OdGRyHeM%252C%252Fm%252F01_t5f&vet=1&usg=AI4_-kRboiNRZfuSt_Zf8q_W-bXwcZtoEA&sa=X&ved=2ahUKEwiBovOFqLfqAhVOmuAKHSCBBiQQ_B0wF3oECBEQAw#imgrc=ZxVFVyg3ApcJ4M'
    },
    {
        name:"John Wick",
        year:2014,
        director:"Chad Stahelski",
        pic: 'https://www.google.com/search?q=John+Wick&sa=X&rlz=1C1CHBF_enUS901US901&stick=H4sIAAAAAAAAAONgFuLVT9c3NEw2N00vryywUOLSz9U3qDQ1ssiK1xLyzS_LTA1OLcpMLQ7JB3MWsXJ65WfkKYRnJmfvYGUEADYZtFtAAAAA&biw=1920&bih=969&sxsrf=ALeKk033l-P__IPUPZN60ID5kw_euCrQ4w:1593993434853&tbm=isch&source=iu&ictx=1&fir=kgIeA5kJzuTa7M%252Cosb4pGHXcK9KGM%252C%252Fm%252F0y528j_&vet=1&usg=AI4_-kQjbmZ2aWC0KC11mH_AMSl_MzKOwQ&ved=2ahUKEwjun9WjqLfqAhXCSt8KHQgLANYQ_B0wGnoECBAQAw#imgrc=kgIeA5kJzuTa7M'
    },
    {
        name:"Lord of the Rings: The Fellowship of the Ring",
        year:2001,
        director:"Peter Jackson",
        pic: 'https://www.google.com/search?q=lord+of+the+rings&rlz=1C1CHBF_enUS901US901&sxsrf=ALeKk02r8f884r4Mzut-ZellmmphLbyKtQ:1593993742338&tbm=isch&source=iu&ictx=1&fir=4l743nNSaZYBRM%252CKm8xvjU-0n_9kM%252C%252Fm%252F017gl1&vet=1&usg=AI4_-kQQDtBE5y3IzTmJ3a36lCmgDHp3Jg&sa=X&ved=2ahUKEwiwxKS2qbfqAhXNnuAKHRo5BsEQ_B0wG3oECBgQAw#imgrc=4l743nNSaZYBRM'
    },
    {
        name:"Star Wars: Return of the Jedi",
        year:1983,
        director:"Richard Marquand",
        pic: 'https://www.google.com/search?q=return+of+the+jedi&rlz=1C1CHBF_enUS901US901&sxsrf=ALeKk01wjSP9kJ8HGyJCppbKuBfX5tIyMA:1593993941656&tbm=isch&source=iu&ictx=1&fir=7iuDT4Etu4lWwM%252CyN1TLUjE_vMsxM%252C%252Fm%252F0ddjy&vet=1&usg=AI4_-kTYF4qTC84K7fycZRefA0Y9WN_2lg&sa=X&ved=2ahUKEwieiaqVqrfqAhWRd98KHanUBVIQ_B0wFXoECA8QAw#imgrc=7iuDT4Etu4lWwM'
    }
];
const template = favoriteMovies.map(fav => `
<li>
    <p>Name: ${fav.name}</p>
    <p>Year: ${fav.year}</p>
    <p>Director: ${fav.director}</p>
    <p>Pic: ${fav.pic}</p>
</li>
`);
ol.innerHTML = template.join('');