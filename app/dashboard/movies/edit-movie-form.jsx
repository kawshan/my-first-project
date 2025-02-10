"use client"
import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,} from "@/components/ui/dialog"
import {CardContent, CardFooter} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Multiselect} from "@/components/multiselect";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {GENRES, RATINGS} from "@/lib/constance";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {useState} from "react";

export default function EditMovieForm({movie, open,onCancel,isLoading}) {
    const [title, setTitle] = useState(movie?.title);
    const [year,setYear] = useState(movie?.year);
    const [plot, setPlot] = useState(movie?.plot);
    const [genres, setGenres] = useState([]);
    const [poster,setPoster] = useState(movie?.poster);
    const [rated,setRated] = useState(movie?.rated);
    const [imdbRating,setImdbRating] = useState(movie.imdb?.rating?? 0)

    const genresList = GENRES.map((genre)=>({
        label: genre,
        value: genre,
    }));


    const handleSubmitForm = ()=>{

    }

    return (
        <div>

            <Dialog open={open} onOpenChange={onCancel}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>edit movie</DialogTitle>
                        <DialogDescription>update the selected movie</DialogDescription>
                    </DialogHeader>

                <form onSubmit={handleSubmitForm}>
                    <div className="space-y-4">

                        <div>
                            <Label htmlFor="title">Movie Title</Label>
                            <Input id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter the movie title"/>
                        </div>


                        <div>
                            <Label htmlFor="year">Movie year</Label>
                            <Input id="year" name="year" value={year} onChange={(e)=>setYear(Number(e.target.value))} type="number" placeholder="Enter the year"/>
                        </div>


                        <div>
                            <Label htmlFor="plot">Movie plot</Label>
                            <Textarea id="plot" name="plot" value={plot} onChange={(e)=>setPlot(e.target.value)}  placeholder="Enter plot"/>
                        </div>

                        <div>
                            <Label htmlFor="genres">Movie genres</Label>
                            <Multiselect
                                list={genresList} placeholder="select movie geners" onValueChange={setGenres}
                            />
                        </div>

                        <div>
                            <Label htmlFor="rated">Movie Rated</Label>
                            <Select value={rated} onValueChange={(val) => setRated(val)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="select a rating"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {RATINGS.map((rating) => (
                                        <SelectItem key={rating} value={rating}>{rating}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>


                        <div>
                            <Label htmlFor="poster">Poster URL</Label>
                            <Input id="poster" name="poster" type="text" value={poster} onChange={(e)=>setPoster(e.target.value)}
                                   placeholder="enter the poster url"></Input>
                        </div>


                    </div>

                    <div className="w-full flex justify-end space-x-2">
                        <Button type="reset" variant="outline">clear form</Button>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading && <Loader2 className="animate-spin"/>} Add Movie
                        </Button>
                    </div>


                </form>
                </DialogContent>
            </Dialog>

        </div>
    );
}