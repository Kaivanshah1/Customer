import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

export default function Testimonial() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default"> + Create</Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle>Create Testimonial</DialogTitle>
          <DialogDescription>
            Create your personalize testimonial
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="name"
              defaultValue=""
              placeholder="Title"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Custom Message
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
              placeholder="Custom Message"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Question To Ask
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
              placeholder="Question To Ask"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
