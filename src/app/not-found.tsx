import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-start justify-center px-4 pt-16 md:px-8">
      <p className="font-display text-8xl text-alien">404</p>
      <h1 className="type-display">Esa pieza no está</h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        El enlace no coincide con el catálogo. Vuelve al shop o escríbenos y lo buscamos.
      </p>
      <Link href="/shop" className="mt-6 bg-alien px-5 py-3 font-display text-2xl text-ink">
        Ver catálogo
      </Link>
    </div>
  );
}
