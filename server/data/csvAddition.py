import csv

output_file = "server/data/labels.csv"

# Custom data to append
data = [
    ("000", [0.8, 0.4, 0.6, 0.6, 0.3]),
    ("001", [0.6, 0.8, 0.4, 0.7, 0.9]),
    ("002", [0.3, 0.8, 0.9, 0.7, 0.2]),
    ("003", [0.75 ,0.75 , 0.75, 0.5, 0.5]),
    ("004", [0.4 ,0.725 , 0.325, 0.475, 0.55])
]

# Number of additional transformations for each base filename
num_transformations = 10

with open(output_file, mode="w", newline="") as file:
    writer = csv.writer(file)
    # Write the header row
    writer.writerow(["filename", "openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"])
    
    # Write the new data rows for each base filename and transformation
    for base_filename, traits in data:
        for i in range(num_transformations + 1):
            filename = f"{base_filename}-{i}.jpg"
            writer.writerow([filename, *traits])

print(f"Data Added to {output_file}")
