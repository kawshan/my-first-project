"use client"
import React, {useState} from 'react';
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import {Button} from "@/components/ui/button";
import EditMovieForm from "@/app/dashboard/movies/edit-movie-form";

function MovieTable({movies}) {
    const [editingMovie,setEditingMovie] = useState(null);
    const [deletingMovie,setDeletingMovie] = useState(null);



    console.log("movies table client ",movies);


    const handleEdit = (movie)=>{
        console.log("edit",movie)
        setEditingMovie(movie);
    }


    const handleDelete = (movie)=>{
        setDeletingMovie(movie);
    }


    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold text-blue-600">cover</TableHead>
                        <TableHead className="font-bold text-blue-600">title</TableHead>
                        <TableHead className="font-bold text-blue-600">year</TableHead>
                        <TableHead className="font-bold text-blue-600">rated</TableHead>
                        <TableHead className="font-bold text-blue-600">Imdb</TableHead>
                        <TableHead className="font-bold text-blue-600">genres</TableHead>
                        <TableHead className="font-bold text-blue-600 text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {movies.map(movie=>(
                        <TableRow key={movie.id}>
                            <TableCell>poster url</TableCell>
                            <TableCell>{movie?.title??"n/a"}</TableCell>
                            <TableCell>{movie?.year??"n/a"}</TableCell>
                            <TableCell>{movie?.rated??"n/a"}</TableCell>
                            <TableCell>{movie?.imdb?.rating??"n/a"}</TableCell>
                            <TableCell>{movie?.genres.join(",")}</TableCell>
                            <TableCell>
                                <div className="flex justify-end space-x-2">
                                    <Button variant="outline" size="sm" className="min-w-[120px]" onClick={()=>handleEdit(movie)}>edit</Button>
                                    <Button variant="destructive" size="sm" className="min-w-[120px]" onClick={()=>handleDelete(movie)}>delete</Button>
                                </div>
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
            {editingMovie && <EditMovieForm movie={editingMovie} open={true} onCancel={()=>setEditingMovie(null)} isLoading={true}/>}
        </div>
    );
}

export default MovieTable;