import re

with open('src/styles.css', 'r') as f:
    content = f.read()

# The user wants to fix the CSS cascade and remove z-index: 10 from desktop sidebar
# and move the @media (max-width: 768px) to the bottom.

# 1. Find the mobile media queries at the top
media_regex = re.compile(r'(@media \(max-width: 768px\) \{.*?\n\})', re.DOTALL)
matches = media_regex.findall(content)

# Remove them from their original location
new_content = media_regex.sub('', content)

# 2. Fix the .sidebar z-index
new_content = new_content.replace('z-index: 10;', '/* z-index removed to fix mobile cascade */')

# 3. Fix the formatting at the bottom of the file (where I used echo >>)
new_content = new_content.replace('}@media (max-width: 1199px) {', '}\n\n@media (max-width: 1199px) {')

# 4. Append the mobile media queries at the bottom
new_content += '\n\n/* =========================\n   MOBILE MEDIA QUERIES (MOVED TO BOTTOM)\n   ========================= */\n\n'
for m in matches:
    # Ensure proper stacking context in the media query
    # The overlay MUST NOT have backdrop-filter: blur() if we want the sidebar sharp, 
    # but the user said "The overlay may use backdrop-filter: blur(2px) but sidebar must remain sharp".
    # This is standard behavior as long as they are siblings.
    new_content += m + '\n\n'

with open('src/styles.css', 'w') as f:
    f.write(new_content)

print("CSS Fixed successfully")
