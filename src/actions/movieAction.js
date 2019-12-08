import axios from 'axios';
import {FETCH_ALL,FETCH_ONE, OPEN_MODAL, CLOSE_MODAL,SEARCH,LOGIN} from './actionTypes'
import MD5 from '../assets/md5.js'

export function fetchMovies(page) {
    var url = 'https://api.themoviedb.org/3/movie/popular?page='+page+'&api_key=df10b36ca31c1f71175d9687a20f30e6&language=en-US';
    return (dispatch) => {
        return axios.get(url).then((res) => {
            //eslint-disable-next-line
            res.data.results.map(m => m.poster_path = 'https://image.tmdb.org/t/p/w185/' + m.poster_path)
            dispatch({
                type: FETCH_ALL,
                payload: res.data.results
            })
        })
    } 
}

export function fetchOneMovie(id) {
    var url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key=df10b36ca31c1f71175d9687a20f30e6';
    return (dispatch) => {
        axios.get(url).then((res) => {
            res.data.poster_path = 'https://image.tmdb.org/t/p/w185/' + res.data.poster_path
            res.data.revenue = formatMoney(res.data.revenue);            
            dispatch({
                type: FETCH_ONE, 
                payload: res.data
            });
        })
    }
}

export function openModal(id) {
    var url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=df10b36ca31c1f71175d9687a20f30e6';
    //eslint-disable-next-line
    history.pushState({}, "Movie", window.location.href+id);
    return (dispatch) => {
        axios.get(url).then((res) => {
            res.data.poster_path = 'https://image.tmdb.org/t/p/w185/' + res.data.poster_path
            res.data.revenue = formatMoney(res.data.revenue);            
            dispatch({
                type: OPEN_MODAL, 
                payload: res.data
            });
        })
    }
}

export function fetchUser(username,password) {
    var url = 'https://api.myjson.com/bins/17nr4k';
    password = MD5(password);
    return (dispatch) => {
        axios.get(url).then((res) => {
            if(username === res.data.users[0].name && password === res.data.users[0].password) {
                dispatch({type: LOGIN, payload: true});
            }
        })
    }
}

export function closeModal() {
    var url = window.location.href;
    //eslint-disable-next-line
    history.pushState({}, "Movie", url.substr(0, url.lastIndexOf('/') + 1));
    return {type: CLOSE_MODAL, payload: []};
}

export function search(key) {
    return {type: SEARCH, payload: key};
}

function formatMoney(n) {
    var i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(2), 10));
    return i.substr(0).replace(/(\d{3})(?=\d)/g, "$1,") 
            + (2 ? "." + Math.abs(n - i).toFixed(2).slice(2) : "");
};