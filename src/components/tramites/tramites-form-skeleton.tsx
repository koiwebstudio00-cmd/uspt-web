import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function TramitesFormSkeleton() {
    return (
        <Card className="border-muted2">
            <CardHeader>
                <Skeleton className="h-8 w-64" />
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4 pt-6">
                    {/* DNI Field */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-10 w-full" />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-10 w-full" />
                    </div>

                    {/* Tramite Select */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
