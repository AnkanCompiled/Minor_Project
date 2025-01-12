import numpy as np
import cv2
from scipy.stats import linregress
from utils import preprocess_image
from utils import segment_lines

def extract_features(image_path):
    """Extract handwriting features from the given image."""
    binary = preprocess_image(image_path)

    # Extract features
    features = {}
    contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Top Margin
    y_coords = [cv2.boundingRect(c)[1] for c in contours]
    features['top_margin'] = min(y_coords) if y_coords else 0

    # Pen Pressure
    features['pen_pressure'] = np.mean(binary)

    # Baseline Angle
    baseline_angles = []
    for contour in contours:
        coords = np.column_stack(np.where(contour))
        if len(coords) > 1:
            # Check if x-coordinates are identical
            if np.all(coords[:, 1] == coords[0, 1]):
                continue  # Skip contours with identical x-coordinates
            slope, _, _, _, _ = linregress(coords[:, 1], coords[:, 0])
            baseline_angles.append(np.arctan(slope) * (180 / np.pi))
    features['baseline_angle'] = np.mean(baseline_angles) if baseline_angles else 0

    # Letter Size
    letter_sizes = [cv2.boundingRect(c)[3] for c in contours]
    features['letter_size'] = np.mean(letter_sizes) if letter_sizes else 0

    # Line Spacing (needs line segmentation)
    lines = segment_lines(binary)
    line_spacings = [
        lines[i + 1][1] - (lines[i][1] + lines[i][3])
        for i in range(len(lines) - 1)
    ]
    features['line_spacing'] = np.mean(line_spacings) if line_spacings else 0

    return features
