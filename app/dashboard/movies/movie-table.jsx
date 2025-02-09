"use client"
import React from 'react';
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"

function MovieTable({movies}) {
    console.log("movies table client ",movies);
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
                        <TableHead className="font-bold text-blue-600">Actions</TableHead>
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
                            <TableCell>Action</TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default MovieTable;