# Terry Lab Website

**Live site:** https://terrylab.github.io  
**Built with:** Jekyll (hosted free on GitHub Pages)

---

## Table of Contents

1. [How the site works](#how-the-site-works)
2. [How to edit files directly on GitHub (no software needed)](#how-to-edit-on-github)
3. [Add a new lab member](#add-a-new-lab-member)
4. [Move someone to alumni](#move-someone-to-alumni)
5. [Add a new publication](#add-a-new-publication)
6. [Add a news post / photo](#add-a-news-post--photo)
7. [Edit page text](#edit-page-text)
8. [Upload photos and images](#upload-photos-and-images)
9. [Preview the site locally (optional)](#preview-the-site-locally-optional)
10. [Quick-reference cheat sheet](#quick-reference-cheat-sheet)

---

## How the site works

The website is a collection of simple text files stored in a GitHub repository. When you push a change to the `main` branch, GitHub automatically rebuilds and publishes the site — usually within 1–2 minutes. **You never need to run any software or write any HTML.**

The most important folders:

| Folder | What it contains |
|---|---|
| `_people/` | One file per lab member (current + alumni) |
| `_publications/` | One file per publication |
| `_posts/` | One file per news post |
| `_data/research_areas.yml` | The list of research areas shown on the Research page |
| `assets/images/` | All photos and images |

Pages like Home, Research, Teaching, etc. are the `.md` files in the root folder (`index.md`, `research.md`, etc.).

---

## How to edit on GitHub

You can make all edits directly on the GitHub website — no need to install anything on your computer.

### To edit an existing file:

1. Go to **https://github.com/terrylab/terrylab.github.io**
2. Navigate to the file you want to edit (e.g., click `_people/` then click a person's file)
3. Click the **pencil icon** (✏️) in the top-right corner of the file view
4. Make your changes in the text editor
5. Scroll down to the green **"Commit changes"** button
6. Add a short note describing what you changed (e.g., "Add Jane Van Gunst bio")
7. Click **"Commit changes"**

The site will update automatically within about 2 minutes.

### To create a new file:

1. Navigate to the folder where the new file belongs (e.g., `_people/`)
2. Click the **"Add file" → "Create new file"** button (top right)
3. Give the file a name (see naming conventions below)
4. Paste in the template content and fill it out
5. Click **"Commit new file"**

### To upload a photo:

1. Go to the `assets/images/` folder
2. Click **"Add file" → "Upload files"**
3. Drag in your photo file
4. Click **"Commit changes"**

---

## Add a new lab member

### Step 1 — Prepare the photo (optional but recommended)

- Crop to a roughly **4:3 ratio** (e.g., 800 × 600 px) or square
- Save as `.jpg` at high quality
- Name it something simple: `firstname-lastname.jpg`
- Upload to `assets/images/` (see above)

### Step 2 — Create the person file

1. Go to the `_people/` folder on GitHub
2. Open `TEMPLATE.md` and copy its entire contents
3. Click "Add file" → "Create new file"
4. Name the file: `firstname-lastname.md` (lowercase, hyphens, e.g. `jane-doe.md`)
5. Paste the template content and fill in each field

**Field guide:**

```yaml
name: "Jane Doe"           # Full name as it appears on the site
role: "PhD Student"        # Title (e.g. "Associate Professor", "NSF Postdoctoral Fellow", "PhD Student", "Undergraduate Researcher")
category: "phd"            # Controls which section this person appears in — see options below
order: 4                   # Sort order within the section (1 = first shown)
email: "doe@oregonstate.edu"
photo: "jane-doe.jpg"      # Just the filename — file must be in assets/images/
website: "https://..."     # Optional personal website; leave blank if none
bio: >
  Write a 2–4 sentence research description here.
```

**Category options — use exactly one:**

| Category | Where they appear |
|---|---|
| `pi` | Principal Investigator (large featured card at top) |
| `postdoc` | Current Postdoctoral Researchers |
| `phd` | Current PhD Students |
| `undergrad` | Current Undergraduate Researchers |
| `alumni-postdoc` | Alumni: Postdoctoral Scholars |
| `alumni-grad` | Alumni: Graduate Students |
| `alumni-undergrad` | Alumni: Undergraduate Researchers |

---

## Move someone to alumni

Open their file in `_people/` and change three fields:

```yaml
# BEFORE (current member):
category: "phd"
order: 2
bio: "Research description..."

# AFTER (alumnus):
category: "alumni-grad"
years: "2020–2024"          # Add this line
years_end: 2024             # Add this line (number only — used for sorting)
current_position: "Postdoctoral Researcher, UC Berkeley"  # Add this line
bio: "Research description..."  # You can keep or delete the bio
```

The person will automatically move from the current members grid to the alumni section the next time you save.

---

## Add a new publication

1. Go to the `_publications/` folder on GitHub
2. Open `TEMPLATE.md` and copy its contents
3. Create a new file named: `YYYY-first-author-keyword.md`  
   (e.g. `2024-semerdjian-morphology.md`)
4. Paste and fill in:

```yaml
year: 2024                          # 4-digit year (no quotes)
authors: "Semerdjian, A. and R.C. Terry"
title: "Your Paper Title Here"
journal: "Journal of Mammalogy"
volume: "105"
pages: "123–134"
doi: "10.1093/jmammal/gyad001"      # DOI without "https://doi.org/"
order: 1                            # If you have multiple 2024 papers, number them 1, 2, 3...
```

The paper will automatically appear on the Publications page, sorted under the correct year.

---

## Add a news post / photo

1. Go to the `_posts/` folder on GitHub
2. Create a new file with this **exact naming format**: `YYYY-MM-DD-short-title.md`  
   (e.g. `2024-08-15-field-season-recap.md`)
3. Paste this template at the top of the file, fill it in, then write your post below:

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-08-15
photo: "fieldwork-2024.jpg"    # Optional — leave blank if no photo
photo_alt: "Lab members at the Alvord Desert field site"
---

Your post text goes here. Write as much as you like.

New paragraphs are separated by a blank line.
```

Posts appear newest-first on the News + Photos page. The date in the filename controls the order.

---

## Edit page text

The main page text files are in the root folder:

| File | Page |
|---|---|
| `index.md` | Home |
| `shared-values.md` | Shared Values |
| `research.md` | Research (intro text only — areas are in `_data/research_areas.yml`) |
| `teaching.md` | Teaching |
| `outreach.md` | Outreach |
| `join-us.md` | Join Us |

Open any of these in GitHub, click the pencil icon, and edit the text. The part between the `---` dashes at the top is front matter (settings) — don't delete those dashes or the title/layout lines. The text below the second `---` is the page body.

### To add or edit a research area:

Open `_data/research_areas.yml`. Each entry looks like:

```yaml
- title: "Research Area Title"
  image: "/assets/images/research-area.jpg"
  text: >
    Description paragraph here. Write as much as you need.
    Continue on the next line with the same indentation.
```

Add a new entry by copying an existing block and pasting it below. The areas appear on the Research page in the order they are listed in this file.

---

## Upload photos and images

All photos live in `assets/images/`.

**Recommended sizes:**
- **Person photos:** 600–800px wide, 4:3 ratio (e.g. 800×600) or square. Save as `.jpg`.
- **News post photos:** 1200px wide, landscape orientation. Save as `.jpg`.
- **Page banner images:** 1600px wide, ~600px tall. Save as `.jpg`.
- **Research area images:** 800×600px. Save as `.jpg`.

**Important:** After uploading a photo, update the relevant file to reference it. For a person, that means editing their `_people/` file and setting `photo: "your-filename.jpg"`.

**Banner images** (the decorative photos at the top of each page) are set in the page's front matter:

```yaml
banner_image: /assets/images/banner-research.jpg
```

The current banners default to a warm brown gradient if no image is uploaded. To add a real photo, upload it to `assets/images/` and update the `banner_image:` line in the relevant `.md` file.

---

## Preview the site locally (optional)

If you want to preview changes before they go live, you can run Jekyll on your computer:

1. Install Ruby (https://www.ruby-lang.org/en/documentation/installation/)
2. Open a Terminal, navigate to this folder, and run:
   ```
   bundle install
   bundle exec jekyll serve
   ```
3. Open http://localhost:4000 in your browser

This is completely optional — edits made directly on GitHub go live automatically.

---

## Quick-reference cheat sheet

### Add a new lab member

> Create `_people/firstname-lastname.md` → set `category: "phd"` (or relevant category) → set `order:`, `name:`, `role:`, `email:`, `photo:`, `bio:`

### Move to alumni

> Edit their `_people/` file → change `category:` → add `years:`, `years_end:`, `current_position:`

### Add a publication

> Create `_publications/YYYY-author-keyword.md` → set `year:`, `authors:`, `title:`, `journal:`, `doi:`

### Add news post

> Create `_posts/YYYY-MM-DD-title.md` → set `layout: post`, `title:`, `date:`, optionally `photo:` → write post body below `---`

### Add a research area

> Edit `_data/research_areas.yml` → paste a new block with `title:`, `image:`, `text:`

### Upload a photo

> GitHub → `assets/images/` → "Add file" → "Upload files"

### What happens after I save?

GitHub rebuilds the site automatically. It's usually live within **1–2 minutes**. Check https://terrylab.github.io to confirm.
