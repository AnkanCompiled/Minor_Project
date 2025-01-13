from PIL import Image, ImageEnhance, ImageFilter
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

    # Brightness Adjustment (random factor between 0.5 and 1.5)
    brightness_factor = random.uniform(0.5, 1.5)
    brighter_image = ImageEnhance.Brightness(image).enhance(brightness_factor)
    brighter_image.save(f"{output_folder}/{base_filename}-{filename_counter}.jpg")
    filename_counter += 1

    # Contrast Adjustment (random factor between 0.5 and 1.5)
    contrast_factor = random.uniform(0.5, 1.5)
    contrast_image = ImageEnhance.Contrast(image).enhance(contrast_factor)
    contrast_image.save(f"{output_folder}/{base_filename}-{filename_counter}.jpg")
    filename_counter += 1

    # Color Adjustment (random factor between 0.5 and 1.5)
    color_factor = random.uniform(0.5, 1.5)
    color_image = ImageEnhance.Color(image).enhance(color_factor)
    color_image.save(f"{output_folder}/{base_filename}-{filename_counter}.jpg")
    filename_counter += 1

    # Sharpness Adjustment (random factor between 0.5 and 2.0)
    sharpness_factor = random.uniform(0.5, 2.0)
    sharp_image = ImageEnhance.Sharpness(image).enhance(sharpness_factor)
    sharp_image.save(f"{output_folder}/{base_filename}-{filename_counter}.jpg")
    filename_counter += 1

    # Crop (random crop size and position)
    width, height = image.size
    crop_width = random.randint(int(0.5 * width), width)
    crop_height = random.randint(int(0.5 * height), height)
    left = random.randint(0, width - crop_width)
    top = random.randint(0, height - crop_height)
    cropped_image = image.crop((left, top, left + crop_width, top + crop_height))
    cropped_image.save(f"{output_folder}/{base_filename}-{filename_counter}.jpg")
    filename_counter += 1

    # Resize (random size)
    resize_width = random.randint(int(0.5 * width), int(1.5 * width))
    resize_height = random.randint(int(0.5 * height), int(1.5 * height))
    resized_image = image.resize((resize_width, resize_height))
    resized_image.save(f"{output_folder}/{base_filename}-{filename_counter}.jpg")
    filename_counter += 1

    # Add Noise
    noisy_image = image.convert("RGB")
    pixels = noisy_image.load()
    for i in range(noisy_image.width):
        for j in range(noisy_image.height):
            r, g, b = pixels[i, j]
            r = min(255, max(0, r + random.randint(-30, 30)))
            g = min(255, max(0, g + random.randint(-30, 30)))
            b = min(255, max(0, b + random.randint(-30, 30)))
            pixels[i, j] = (r, g, b)
    noisy_image.save(f"{output_folder}/{base_filename}-{filename_counter}.jpg")
    filename_counter += 1



# Example usage:
output_folder = 'server/data/images'  # Folder to save the expanded images
image_path = f"{output_folder}/000-0.jpg"  # Provide the path to your image
apply_transformations(image_path, output_folder)
