import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button";
export default function DeleteMovieDialog({open, movie,onConfirm ,onCancel,isLoading}) {
    return (
        <Dialog open={open} onOpenChange={onCancel}>
            <DialogContent>
                <DialogHeader>
                     <DialogTitle>Delete movie</DialogTitle>
                    <DialogDescription>are you sure to delete movie? <b>{movie.title}</b> this action cannot be undone </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline" onClick={onCancel} disabled={isLoading}>cancel</Button>
                    <Button variant="destructive" onClick={onConfirm} disabled={isLoading}>delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
