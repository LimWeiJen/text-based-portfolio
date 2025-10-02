import { Gamepad2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-2">
            <Gamepad2 className="h-4 w-4" />
            <p className="font-bold">Lim Wei Jen</p>
        </div>
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
}
