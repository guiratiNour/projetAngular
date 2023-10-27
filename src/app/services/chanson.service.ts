import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chanson } from '../model/chanson.model';
import { AlbumWrapper } from '../model/albumWrapped.model';
import { Album } from '../model/album.model';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class ChansonService {
  apiURL: string = 'http://localhost:56034/chansons/api';
  apiURLCat: string = 'http://localhost:56034/chansons/cat';

 

 

  constructor(private http : HttpClient) { 
    
  
    
  }

  listeChanson(): Observable<Chanson[]>{
    return this.http.get<Chanson[]>(this.apiURL);
    }

    ajouterChanson( prod: Chanson):Observable<Chanson>{
      return this.http.post<Chanson>(this.apiURL, prod, httpOptions);
      }

      supprimerChanson(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }

        
        consulterChanson(id: number): Observable<Chanson> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Chanson>(url);
          }

       

          updateChanson(prod :Chanson) : Observable<Chanson>
            {
                return this.http.put<Chanson>(this.apiURL, prod, httpOptions);
            }

         
         
       listeAlbums():Observable<AlbumWrapper>{
            return this.http.get<AlbumWrapper>(this.apiURL+"/cat");
            }     

  rechercherParAlbum(idCat: number): Observable<Chanson[]> {
    const url = `${this.apiURL}/chAlbum/${idCat}`;
    return this.http.get<Chanson[]>(url);
  } 

  rechercherParNom(nom: string):Observable< Chanson[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Chanson[]>(url);
    }
listeAlbum(): Observable<Album[]>{
  return this.http.get<Album[]>(this.apiURL+"/cat");
}
 
}