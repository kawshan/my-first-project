"use client"
import React, {useState} from 'react';

import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Multiselect} from "@/components/multiselect";
import {GENRES,RATINGS} from "@/lib/constance";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import {Loader2} from "lucide-react";
import {createMovie} from "@/lib/actions/movie";
import {useToast} from "@/hooks/use-toast";


export default function AddMovieForm(props) {

    const [genres, setGenres] = useState([]);
    const [rated, setRated] = useState("");
    const [isLoading, setLoading] = useState("");
    const {toast} = useToast();

    const genresList = GENRES.map((genre)=>({
        label: genre,
        value: genre,
    }));


    const handleSubmitForm = async (event) =>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const title = formData.get("title")?.toString();
        const year = Number(formData.get("year"));
        const plot = formData.get("plot")?.toString();
        const poster = formData.get("poster")?.toString();
        const imdb = Number(formData.get("imdb"));


        if (title&&year&&plot&&rated&&poster){
            console.log({title, year, plot, rated,genres,poster});
            setLoading(true);
            const resp = await createMovie({title,year, plot, rated,genres,poster,imdb:{rating:imdb}});
            setLoading(false);

            if (resp.success){
                toast({
                    variant: "success",
                    title: "Movie added successfully",
                    description: "movie added successfully",
                })
            }


        }

    }


    console.log(genresList);

    return (
        <div>
            <Card className="max-w-2xl mx-auto">

                <CardHeader>
                    <CardTitle>Add Movie</CardTitle>
                    <CardDescription>Add a movie to the mflix database</CardDescription>
                </CardHeader>

                <form onSubmit={handleSubmitForm}>
                    <CardContent className="space-y-4">

                        <div>
                            <Label htmlFor="title">Movie Title</Label>
                            <Input id="title" name="title" placeholder="Enter the movie title"/>
                        </div>


                        <div>
                            <Label htmlFor="year">Movie year</Label>
                            <Input id="year" name="year" type="number" placeholder="Enter the year"/>
                        </div>


                        <div>
                            <Label htmlFor="plot">Movie plot</Label>
                            <Textarea id="plot" name="plot" placeholder="Enter plot"/>
                        </div>

                        <div>
                            <Label htmlFor="genres">Movie genres</Label>
                            <Multiselect
                                list={genresList} placeholder="select movie geners" selectedItems={genres} onValueChange={setGenres}
                            />
                        </div>

                        <div>
                            <Label htmlFor="rated">Movie Rated</Label>
                            <Select onValueChange={(val)=>setRated(val)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="select a rating"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {RATINGS.map((rating)=>(
                                        <SelectItem key={rating} value={rating}>{rating}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>


                        <div>
                            <Label htmlFor="imdb">imdb rating</Label>
                            <Input id="imdb" name="imdb" max="10.0" step="0.1" type="number" placeholder="enter imdb rating" />
                        </div>





                        <div>
                            <Label htmlFor="poster">Poster URL</Label>
                            <Input id="poster" name="poster" type="text" defaultValue="/public/globe.svg" placeholder="enter the poster url"></Input>
                        </div>




                    </CardContent>

                <CardFooter className="w-full flex justify-end space-x-2">
                    <Button type="reset" variant="outline">clear form</Button>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading && <Loader2 className="animate-spin"/>} Add Movie
                    </Button>
                </CardFooter>





                </form>


            </Card>
        </div>
    );
}