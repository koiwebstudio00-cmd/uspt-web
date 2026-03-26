import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Search,
    X,
    Book,
    GraduationCap,
    FileText,
    Layout,
    ArrowRight,
    Zap,
} from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";
import { Link } from "react-router-dom";

type ResultType = "carrera" | "curso" | "blog" | "posgrado" | "servicio";

interface SearchResult {
    id: string | number;
    title: string;
    type: ResultType;
    slug?: string;
    description?: string;
    url: string;
}

interface SearchModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState<ResultType[]>([]);

    const debouncedQuery = useDebounce(query, 300);

    const toggleType = (type: ResultType) => {
        setSelectedTypes((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type],
        );
    };

    useEffect(() => {
        if (!debouncedQuery) {
            setResults([]);
            return;
        }

        const fetchResults = async () => {
            setLoading(true);
            try {
                const baseUrl =
                    import.meta.env.VITE_API_URL ||
                    "http://localhost:3000/api/public";
                let url = `${baseUrl}/search?q=${encodeURIComponent(debouncedQuery)}`;
                if (selectedTypes.length > 0) {
                    url += `&types=${selectedTypes.join(",")}`;
                }
                const response = await fetch(url);
                if (!response.ok) throw new Error("Search failed");
                const data = await response.json();
                setResults(data.results || []);
            } catch (error) {
                console.error("Error fetching search results:", error);
                setResults([]);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [debouncedQuery, selectedTypes]);

    // Reset query when modal closes or opens
    useEffect(() => {
        if (!open) {
            setQuery("");
            setSelectedTypes([]);
        }
    }, [open]);

    const getTypeIcon = (type: ResultType) => {
        switch (type) {
            case "carrera":
                return <GraduationCap className="size-4" />;
            case "curso":
                return <Book className="size-4" />;
            case "blog":
                return <FileText className="size-4" />;
            case "posgrado":
                return <Layout className="size-4" />;
            case "servicio":
                return <Zap className="size-4" />;
            default:
                return <Search className="size-4" />;
        }
    };

    const getTypeLabel = (type: ResultType) => {
        switch (type) {
            case "carrera":
                return "Carrera";
            case "curso":
                return "Curso";
            case "blog":
                return "Noticia";
            case "posgrado":
                return "Posgrado";
            case "servicio":
                return "Servicio";
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[700px] p-0 gap-0 overflow-hidden bg-white/95 backdrop-blur-md border-primary/20 shadow-2xl">
                <DialogHeader className="px-6 pt-10 pb-2">
                    <DialogTitle className="sr-only">Buscador USPT</DialogTitle>
                    <DialogDescription className="sr-only">
                        Encuentra información sobre carreras, cursos, noticias y
                        servicios.
                    </DialogDescription>

                    <div className="flex items-center gap-3 bg-slate-50 px-4 border border-slate-200 transition-all duration-200 focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10">
                        <Search className="size-5 text-slate-400" />
                        <input
                            placeholder="¿Qué estás buscando?..."
                            className="flex h-10 w-full bg-transparent placeholder:text-base border-0 text-lg placeholder:text-slate-400 outline-none p-0"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            autoFocus
                        />
                        {query && (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="size-8 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                                onClick={() => setQuery("")}
                            >
                                <X className="size-4" />
                            </Button>
                        )}
                    </div>
                </DialogHeader>

                <div className="px-4 py-2 border-b flex flex-wrap gap-2 items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-2">
                        FILTRAR POR:
                    </span>
                    {(["carrera", "curso", "posgrado"] as ResultType[]).map(
                        (type) => (
                            <Badge
                                key={type}
                                variant={
                                    selectedTypes.includes(type)
                                        ? "default"
                                        : "secondary"
                                }
                                className={`cursor-pointer transition-all px-3 py-1 rounded-full ${
                                    selectedTypes.includes(type)
                                        ? "bg-primary text-white shadow-md shadow-primary/20"
                                        : "bg-slate-100 text-slate-500 hover:bg-slate-200 border-transparent shadow-none"
                                }`}
                                onClick={() => toggleType(type)}
                            >
                                {getTypeLabel(type)}
                            </Badge>
                        ),
                    )}
                </div>

                <ScrollArea className="h-[450px]">
                    <div className="p-4 gap-3 flex flex-col">
                        {loading ? (
                            <div className="flex flex-col gap-4 py-16 items-center text-primary/40">
                                <Search className="size-12 animate-pulse" />
                                <p className="animate-pulse font-medium text-lg">
                                    Buscando en la USPT...
                                </p>
                            </div>
                        ) : results.length > 0 ? (
                            results.map((result) => (
                                <Link
                                    key={`${result.type}-${result.id}`}
                                    to={result.url}
                                    onClick={() => onOpenChange(false)}
                                    className="group relative flex flex-col p-5 border border-primary/5 bg-white hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge
                                            variant="outline"
                                            className="px-2.5 py-0.5 gap-1.5 font-semibold text-[10px] uppercase tracking-wider bg-primary/5 border-primary/10 text-primary"
                                        >
                                            {getTypeLabel(result.type)}
                                        </Badge>
                                        <div className="size-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:text-primary">
                                            <ArrowRight className="size-4" />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-xl text-slate-800 group-hover:text-primary transition-colors mb-1 leading-tight">
                                        {result.title}
                                    </h3>
                                    {result.description && (
                                        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                                            {result.description}
                                        </p>
                                    )}
                                </Link>
                            ))
                        ) : debouncedQuery ? (
                            <div className="py-20 text-center px-4">
                                <div className="size-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search className="size-10 text-muted-foreground/30" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-700">
                                    No encontramos resultados
                                </h3>
                                <p className="text-slate-500 max-w-xs mx-auto mt-2 text-sm leading-relaxed">
                                    No hay coincidencias para "
                                    <span className="text-primary font-semibold">
                                        {debouncedQuery}
                                    </span>
                                    ". Intenta con otros términos o removiendo
                                    filtros.
                                </p>
                            </div>
                        ) : (
                            <div className="py-20 text-center px-4">
                                <div className="relative size-24 mx-auto mb-6">
                                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-25" />
                                    <div className="relative size-full bg-primary/5 rounded-full flex items-center justify-center border border-primary/10">
                                        <Search className="size-10 text-primary/40" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-700 tracking-tight">
                                    Buscador USPT
                                </h3>
                                <p className="text-slate-500 max-w-xs mx-auto mt-2 text-sm leading-relaxed">
                                    Encuentra carreras, cursos, noticias y
                                    servicios de nuestra universidad en un solo
                                    lugar.
                                </p>
                                <div className="mt-8 flex flex-wrap justify-center gap-2">
                                    <Badge
                                        variant="secondary"
                                        className="bg-slate-100 text-slate-500 hover:bg-slate-200 cursor-pointer"
                                        onClick={() => setQuery("Abogacía")}
                                    >
                                        Abogacía
                                    </Badge>
                                    <Badge
                                        variant="secondary"
                                        className="bg-slate-100 text-slate-500 hover:bg-slate-200 cursor-pointer"
                                        onClick={() => setQuery("Diseño")}
                                    >
                                        Diseño
                                    </Badge>
                                    <Badge
                                        variant="secondary"
                                        className="bg-slate-100 text-slate-500 hover:bg-slate-200 cursor-pointer"
                                        onClick={() =>
                                            setQuery("Inscripciones")
                                        }
                                    >
                                        Inscripciones
                                    </Badge>
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>

                <div className="p-3 bg-muted/30 border-t flex justify-between items-center px-6">
                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                        USPT • Universidad de San Pablo T
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <span className="flex items-center gap-1 bg-white px-1.5 py-0.5 rounded border border-slate-200 shadow-sm">
                            ESC
                        </span>
                        <span>para cerrar</span>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
