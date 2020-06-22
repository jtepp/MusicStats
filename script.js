class Artist {
    constructor(artist, tainer) {
        try { this.artist = artist; } catch (e) { console.log(e) }
        try { this.external_urls = this.artist.external_urls; } catch (e) { console.log(e) }
        try { this.followers = this.artist.followers; } catch (e) { console.log(e) }
        try { this.genres = this.artist.genres; } catch (e) { console.log(e) }
        try { this.href = this.artist.href; } catch (e) { console.log(e) }
        try { this.id = this.artist.id; } catch (e) { console.log(e) }
        try { this.images = this.artist.images; } catch (e) { console.log(e) }
        try { this.name = this.artist.name; } catch (e) { console.log(e) }
        try { this.popularity = this.artist.popularity; } catch (e) { console.log(e) }
        try { this.type = this.artist.type; } catch (e) { console.log(e) }
        try { this.tainer = tainer } catch (e) { console.log(e) }
    }

    place(showLabel, onPage) {
        const d = document.createElement("div");
        d.setAttribute("class", "box");

        // const i = document.createElement("img");
        // i.setAttribute("id", this.id);
        // i.setAttribute("src", this.img);
        // i.setAttribute("width", "125");
        // i.setAttribute("height", "125");
        // i.setAttribute("onclick", `location.href = "artist.html?id=${this.id}"`);
        // console.log(this.id);
        const imgurl = closest(this.images, goalImgSize);


        const i = new Image()
        i.id = this.id;
        i.src = imgurl;
        if (this.type && !onPage) {
            i.setAttribute("onclick", `location.href = "${this.type}.html?id=${this.id}"`);
            i.setAttribute('style', 'cursor:pointer');
        }


        const l = document.createElement("label");
        l.setAttribute("for", this.id);
        l.innerHTML = this.name;

        d.appendChild(i);
        if (!showLabel) d.appendChild(l);
        if (!this.tainer) this.tainer = cont;
        this.tainer.append(d);
    }
}
class Album {
    constructor(album, tainer) {
        try {
            this.album = album;
        } catch (e) { console.log(e) }

        try {
            this.artist = new Artist(this.album.artists[0]);
        } catch (e) { console.log(e) }

        try {
            this.external_urls = this.album.external_urls;
        } catch (e) { console.log(e) }

        try {
            this.href = this.album.href;
        } catch (e) { console.log(e) }

        try {
            this.id = this.album.id;
        } catch (e) { console.log(e) }

        try {
            this.images = this.album.images;
        } catch (e) { console.log(e) }

        try {
            this.name = this.album.name;
        } catch (e) { console.log(e) }

        try {
            this.type = this.album.type;
        } catch (e) { console.log(e) }

        try {
            this.tainer = tainer;
        } catch (e) { console.log(e) }

    }
    place(showLabel, onPage, showImage) {
        const d = document.createElement("div");
        d.setAttribute("class", "box");

        // const i = document.createElement("img");
        // i.setAttribute("id", this.id);
        // i.setAttribute("src", this.img);
        // i.setAttribute("width", "125");
        // i.setAttribute("height", "125");
        // i.setAttribute("onclick", `location.href = "artist.html?id=${this.id}"`);
        // console.log(this);
        const imgurl = closest(this.images, goalImgSize);


        const i = new Image()
        i.id = this.id;
        i.src = imgurl;
        if (this.type && !onPage) {
            i.setAttribute("onclick", `location.href = "${this.type}.html?id=${this.id}"`);
            i.setAttribute('style', 'cursor:pointer');
        }

        const l = document.createElement("label");
        l.setAttribute("for", this.id);
        l.innerHTML = this.name;

        d.appendChild(i);
        if (!showLabel) d.appendChild(l);
        if (!this.tainer) this.tainer = cont;
        this.tainer.append(d);
    }
    embed(container) {
        document.getElementById(container).innerHTML = `<iframe src="${this.external_urls.spotify.replace('/album', '/embed/album')}" class="albumframe"
    frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;

    }

}
class Track {
    constructor(track, tainer) {
        try {
            this.track = track;
        } catch (e) { console.log(e) }
        try {
            this.artist = new Artist(this.track.artists[0]);
        } catch (e) { console.log(e) }
        try {
            this.album = new Album(this.track.album);
        } catch (e) { console.log(e) }
        try {
            this.duration = Math.floor(this.track.duration_ms / 60000) + ":" + ((Math.round(Math.round(this.track.duration_ms % 60000) / 1000) > 9) ? Math.round(Math.round(this.track.duration_ms % 60000) / 1000) : ('0' + Math.round(Math.round(this.track.duration_ms % 60000) / 1000)))
        } catch (e) { console.log(e) }
        try {
            this.popularity = this.track.popularity;
        } catch (e) { console.log(e) }
        try {
            this.external_urls = this.track.external_urls
        } catch (e) { console.log(e) }
        try {
            this.explicit = this.track.explicit;
        } catch (e) { console.log(e) }
        try {
            this.preview_url = this.track.preview_url
        } catch (e) { console.log(e) }
        try {
            this.href = this.track.href
        } catch (e) { console.log(e) }
        try {
            this.id = this.track.id;
        } catch (e) { console.log(e) }
        try {
            this.name = this.track.name;
        } catch (e) { console.log(e) }
        try {
            this.type = this.track.type;
        } catch (e) { console.log(e) }
        try {
            this.tainer = tainer;
        } catch (e) { console.log(e) }

    }
    player() {
        const p = document.createElement('audio');
        p.setAttribute('controls', 'true');
        try { p.setAttribute('src', this.preview_url); } catch (e) { console.log(e) }
        p.setAttribute('id', this.id);
        return p;
    }
    place(list) {

        const d = document.createElement("div");
        d.setAttribute("id", this.name + this.id);


        if (list) {
            d.innerHTML = `<h3>${this.name} (${this.duration})</h3>`
            d.setAttribute("onclick", `location.href = "${this.type}.html?id=${this.id}"`);
            d.setAttribute('style', 'cursor:pointer')
        }


        this.tainer.append(d);
    }
    features(feat) {
        this.feat = feat;
        this.acousticness = this.feat.acousticness;
        this.danceability = this.feat.danceability;
        this.duration = this.duration = Math.floor(this.feat.duration_ms / 60000) + ":" + ((Math.round(Math.round(this.feat.duration_ms % 60000) / 1000) > 9) ? Math.round(Math.round(this.feat.duration_ms % 60000) / 1000) : ('0' + Math.round(Math.round(this.feat.duration_ms % 60000) / 1000)))
        this.energy = this.feat.energy;
        this.id = this.feat.id;
        this.instrumentalness = this.feat.instrumentalness;
        this.key = this.feat.key;
        this.liveness = this.feat.liveness;
        this.loudness = this.feat.loudness;
        this.tempo = this.feat.tempo;
        this.time_signature = this.feat.time_signature;
        this.valence = this.feat.valence;

    }
    embed(container) {
        document.getElementById(container).innerHTML = `<iframe src="${this.external_urls.spotify.replace('/track', '/embed/track')}" class="top-frames"
    frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;

    }
    stats() {
        return { 'acousticness': this.acousticness, 'danceability': this.danceability, 'energy': this.energy, 'instrumentalness': this.instrumentalness, 'liveness': this.liveness, 'loudness': this.loudness, 'valence': this.valence };
    }
}
const songList = document.getElementById('songs');
const goalImgSize = 300;
let root = document.documentElement.style;
const b64_encoded = "NzEzYzQ2YzMyYzEyNDQ1N2JhNGExZjgxMjlmMjI1M2Y6YzM3N2NjZjFiOTQ2NGIxN2E3M2ZmMWUzNzFkOGI0MDI=";
const search = document.getElementById("search");
var bear = "";
const cont = document.getElementById("container");
var artistID = '';
// const img = document.getElementById('artwork');
const albumcont = document.getElementById('albumcont');
const headstuff = document.getElementById('headstuff');
const albumname = document.getElementById('albumname');
const artistname = document.getElementById('artistname');
const trackname = document.getElementById('trackname');
const go = document.getElementById("go");
var d = {};
var v1Data = {};
var curArtist;
var curAlbum;
var curTrack;
var artists = [];
var albums = [];
var albumNames = [];
var trackers = [];
const banner = document.getElementById('banner');
const related = document.getElementById('related');
const topTracks = document.getElementById('toptracks');
if (go) {
    go.addEventListener("click", () => {
        searchStuff(search.value);
    });
}

if (search) {
    search.addEventListener("keypress", (e) => {
        if (e.keyCode == 13) go.click();
    });
}

async function getToke() {
    await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${b64_encoded}`,
            'content-type': "application/x-www-form-urlencoded",
            // Accept: "application/x-www-form-urlencoded",
            // "grant_type": "client_credentials"

        },
        body: "grant_type=client_credentials"

    })
        .then(res => res.json())

        .then(d => bear = d['access_token'])
    // bear = data['access_token'])
}
async function searchStuff(q) {
    cont.innerHTML = "";
    artists = [];
    await getToke();
    await fetch(`https://api.spotify.com/v1/search?q=${q}&type=artist&market=us&limit=50`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${bear}`,
        }
    })
        .then((res) => res.json())
        .then((data) => (d = data));
    // .then(data => img.setAttribute('src', data.albums.items[0].images[0].url))
    // console.log(d);

    for (a of d.artists.items) {
        try {
            // await console.log(ci);
            artists.push(new Artist(a));
            // a.name, a.images, a.id, 'artist.html'));
        }
        catch (err) {
            console.log(err);

            artists.push(new Artist(a));
        }
    }

    for (a of artists) {
        a.place();
    }
}

async function artsy(id) {
    await getToke();
    await fetch(`https://api.spotify.com/v1/artists/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${bear}`,
        }
    })
        .then(r => r.json())
        .then(data => {
            try { curArtist = new Artist(data, banner) }
            catch (err) {
                console.log(err);
            }
        })
}

async function alby(id) {
    await getToke();
    //top
    await fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=ca`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${bear}`,
        }
    })
        .then(r => r.json())
        .then(data => d = data.tracks)
    for (t of d) {
        trackers.push(new Track(t, topTracks));
    }
    for (t of trackers) { t.place(); t.embed(t.name + t.id); }

    //Albums
    await fetch(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=album&limit=50`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${bear}`,
        }
    })
        .then(r => r.json())
        .then(data => d = data)
    console.log(d);
    for (a of d.items) {
        if (!albumNames.includes(a.name) && a['available_markets'].length > 1) {
            albumNames.push(a.name);
            // console.log(a)
            try { albums.push(new Album(a, albumcont)) }
            catch (err) {
                console.log(err);
            }
        }
    }
    // console.log(albums)
    for (a of albums) a.place()

    //Related

    await fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${bear}`,
        }
    })
        .then(r => r.json())
        .then(data => d = data.artists)
    for (a of d) artists.push(new Artist(a, related));
    for (a of artists) a.place();
    // console.log(d)
}
async function artistHTML() {
    artistID = new URLSearchParams(window.location.search).get('id');
    await artsy(artistID);
    const h = document.getElementById('h')
    h.innerHTML = curArtist.name
    await alby(artistID)


}
async function getTracks(id) {
    await fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${bear}`,
        }
    })
        .then(r => r.json())
        .then(data => d = data)


}
async function getAlbum(id) {
    await fetch(`https://api.spotify.com/v1/albums/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${bear}`,
        }
    })
        .then(r => r.json())
        .then(data => d = data)
}

async function trackStuff(id) {
    await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${bear}`,
        }
    })
        .then(r => r.json())
        .then(data => d = data)
    curTrack = new Track(d)

    await fetch(`https://api.spotify.com/v1/audio-features/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${bear}`,
        }
    })
        .then(r => r.json())
        .then(data => d = data)
    curTrack.features(d);
    console.log(d)
}



async function albumHTML() {
    albumID = new URLSearchParams(window.location.search).get('id');
    await getToke();
    await getTracks(albumID);
    for (t of d.items) {
        // console.log(t.name)
        trackers.push(new Track(t, songList))

    }
    // console.log(trackers);
    await artsy(d.items[0].artists[0].id);
    await getAlbum(albumID);
    curAlbum = new Album(d, document.getElementById('artwork'))
    curAlbum.place(true, true);
    curAlbum.embed('albumplay')
    curArtist.tainer = document.getElementById('artistic');
    curArtist.place(true)
    document.getElementById(curArtist.id).setAttribute('style', 'width: 60px')
    artistname.innerHTML = curArtist.name
    albumname.innerHTML = curAlbum.name
    for (t of trackers) { t.place(true); }
}


async function trackHTML() {
    trackID = new URLSearchParams(window.location.search).get('id');
    await getToke();
    await trackStuff(trackID);
    trackname.innerHTML = curTrack.name;
    albumname.innerHTML = curTrack.album.name;
    artistname.innerHTML = curTrack.artist.name;
    curTrack.embed('songplay');
    const sstats = curTrack.stats();
    for (k in sstats) {
        document.getElementById('stats').innerHTML += `<br>${k}: ${sstats[k]}`;
    }
}



{
    if (window.location.href.includes('artist.html')) {
        artistHTML();
    }
    else if (window.location.href.includes('album.html')) {
        albumHTML();
    } else if (window.location.href.includes('track.html')) {
        trackHTML();

    }
}



function closest(conn, goal) {
    if (conn.length > 0) {
        var x = 'fuck';
        var counts = []
        for (a of conn) counts.push(a['height']);
        var r = counts.reduce(function (prev, curr) {
            return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        });
        // counts.push(r)
        // console.log(counts)

        for (o of conn) {
            if (o['height'] == r) { /*console.log(o.height);*/ x = o['url'] }
        }

        if (x == 'fuck') return conn[conn.length - 1].url;
        return x;
    } else return '0.jpg';
}

function play(track) {
    const ifr = document.createElement('iframe');
    ifr.setAttribute('src', track.external_urls.spotify.replace('/track', '/embed/track'));
    ifr.setAttribute('class', 'play');
    ifr.setAttribute('width', '300');
    ifr.setAttribute('height', '80');
    ifr.setAttribute('framgeborder', '0');
    ifr.setAttribute('allow', 'encyrpted-media');
    ifr.setAttribute('allowtransparency', 'true');
}