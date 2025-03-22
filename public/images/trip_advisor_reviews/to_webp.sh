#!/bin/bash

# Directorio actual
dir="$(pwd)"

# Crear una carpeta para las imágenes convertidas
mkdir -p webp_output

# Recorrer todas las imágenes en el directorio actual
for img in "$dir"/*.{jpg,jpeg,png}; do
    # Verificar si el archivo existe para evitar errores con nombres no coincidentes
    [ -e "$img" ] || continue
    
    # Obtener el nombre base del archivo sin extensión
    filename=$(basename -- "$img")
    name="${filename%.*}"
    
    # Convertir a WebP con un tamaño máximo de 120 píxeles de ancho
    cwebp -resize 120 0 "$img" -o "webp_output/$name.webp"
    echo "Convertido: $img -> webp_output/$name.webp"
done

echo "Conversión completada. Las imágenes WebP están en la carpeta 'webp_output'."
