import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowDown, ArrowUp, Filter } from "lucide-react"

export const DropdownFilter = ({ options, selectedOption, setSelectedOption }) => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="main"
                        className={"w-full bg-brand-accent rounded-full text-white dark:text-black"}
                    >
                        <Filter /> Filter
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuItem >
                        Terbaru
                        <DropdownMenuShortcut>
                            <ArrowDown />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={"flex items-center justify-between"}>
                        Terlama
                        <DropdownMenuShortcut>
                            <ArrowUp />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

