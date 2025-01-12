from PIL import Image, ImageFilter, ImageTransform
import random
import os as os

def apply_transformations(image_path, output_folder):
    image = Image.open(image_path)
    base_filename = os.path.splitext(os.path.basename(image_path))[0]
    base_filename = base_filename.split('-')[0]  # Extract base filename without -0
    filename_counter = 1  # Start from 1 for sequential naming

    # Ensure output folder exists
    os.makedirs(output_folder, exist_ok=True)

    # Horizontal Mirror
    horizontal_mirror = image.transpose(Image.FLIP_LEFT_RIGHT)
    horizontal_mirror.save(f"{output_folder}/{base_filename}-{filename_counter}.jpg")
    filename_counter += 1

    # Vertical Mirror
    vertical_mirror = image.transpose(Image.FLIP_TOP_BOTTOM)
    vertical_mirror.save(f"{output_folder}/{base_filename}-{filename_counter}.jpg")
    filename_counter += 1

    # Blur (random radius between 1 and 5)
    blur_radius = random.uniform(1, 5)
    blurred_image = image.filter(ImageFilter.GaussianBlur(blur_radius))
    blurred_image.save(f"{output_folder}/{base_filename}-{filename_counter}.jpg")
    filename_counter += 1



# Example usage:
output_folder = 'data/images'  # Folder to save the expanded images
image_path = f"{output_folder}/001-0.jpg"  # Provide the path to your image
apply_transformations(image_path, output_folder)
