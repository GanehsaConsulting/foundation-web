import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="flex items-center">
            <Input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-r-none border-0 rounded-l-full bg-brand-accent/10 dark:bg-brand-accent/30 border-brand-accent/30"
            />
            <Button
                onClick={() => setSearchTerm('')}
                className="bg-brand-main rounded-l-none rounded-r-full"
            >
              <Search/> Cari
            </Button>
        </div>
    );
}