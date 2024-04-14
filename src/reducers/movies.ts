import {Action, Reducer} from "redux";


export interface Movie{
    "id": number,
    "adult": boolean,
    "backdrop_path": string,
    "genre_ids": number[],
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity":number,
    "poster_path": string,
    "release_date":string,
    "title": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
}
interface  MovieState{
    top:Movie[]
}

const initialState:MovieState={
    top:[
        {
            "adult": false,
            "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 278,
            "original_language": "en",
            "original_title": "The Shawshank Redemption",
            "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            "popularity": 139.838,
            "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
            "release_date": "1994-09-23",
            "title": "The Shawshank Redemption",
            "video": false,
            "vote_average": 8.704,
            "vote_count": 25924
        },
        {
            "adult": false,
            "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 238,
            "original_language": "en",
            "original_title": "The Godfather",
            "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            "popularity": 116.885,
            "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
            "release_date": "1972-03-14",
            "title": "The Godfather",
            "video": false,
            "vote_average": 8.695,
            "vote_count": 19658
        },
        {
            "adult": false,
            "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 240,
            "original_language": "en",
            "original_title": "The Godfather Part II",
            "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            "popularity": 79.645,
            "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
            "release_date": "1974-12-20",
            "title": "The Godfather Part II",
            "video": false,
            "vote_average": 8.575,
            "vote_count": 11875
        },
        {
            "adult": false,
            "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
            "genre_ids": [
                18,
                36,
                10752
            ],
            "id": 424,
            "original_language": "en",
            "original_title": "Schindler's List",
            "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
            "popularity": 100.726,
            "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
            "release_date": "1993-12-15",
            "title": "Schindler's List",
            "video": false,
            "vote_average": 8.567,
            "vote_count": 15266
        },
        {
            "adult": false,
            "backdrop_path": "/xyWKrni8WrYzqn7ztvI5nIY0h62.jpg",
            "genre_ids": [
                35,
                10749
            ],
            "id": 1181678,
            "original_language": "en",
            "original_title": "¿Quieres ser mi hijo?",
            "overview": "Lu, a conformist woman in her forties, learns that her 15-year partner has been having extramarital affairs. Starting from scratch, she gets involved in an unexpected relationship with a young womanizer.",
            "popularity": 37.752,
            "poster_path": "/9GuvODahvuFqdhuZ16aBLR4UJoP.jpg",
            "release_date": "2023-09-21",
            "title": "¿Quieres ser mi hijo?",
            "video": false,
            "vote_average": 8.565,
            "vote_count": 224
        },
    ]
}

const moviesReducer:Reducer<MovieState, Action >=(state, action)=>
{
    return initialState
}

export default moviesReducer;