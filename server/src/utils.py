import cv2 
import numpy as np

def preprocess_image(image_path):
    """Preprocess the handwriting image for feature extraction."""
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    _, binary = cv2.threshold(image, 127, 255, cv2.THRESH_BINARY_INV)
    return binary

def segment_lines(binary_image):
    """Segment lines from the handwriting image."""
    contours, _ = cv2.findContours(binary_image, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    lines = [cv2.boundingRect(c) for c in contours]
    return sorted(lines, key=lambda x: x[1])  # Sort by y-coordinate
