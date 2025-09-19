# King County Real Estate Investment Analysis - EDA Project

## Project Overview

This repository contains a comprehensive Exploratory Data Analysis (EDA) of King County house sales data to develop data-driven investment strategies for real estate investor Zachary Brooks. The analysis investigates three key investment hypotheses using fundamental EDA techniques to identify profitable opportunities in the historical house renovation market.

## Business Context

**Client**: Zachary Brooks, Real Estate Investor  
**Objective**: Develop evidence-based investment strategies for renovating and selling historical properties  
**Market**: King County, Washington (May 2014 - May 2015)  
**Dataset Size**: 21,597 property transactions

## Research Questions

This project investigates three core hypotheses:

1. **Renovation Impact**: Do renovated old homes (≥50 years) sell at significantly higher prices than comparable non-renovated homes?
2. **Seasonal Timing**: Do homes sold in peak months (May-July) achieve higher average prices than off-peak months (November-January)?
3. **Location Strategy**: How do old homes in high-density areas compare to new properties in terms of pricing patterns?

## Presentation

Navigate to `presentation/` and open `index.html` in a web browser for a short presentation of key findings.

## Key Findings

### 🏗️ Renovation Strategy (Hypothesis 1)
- **Result**: ✅ **VALIDATED** - Strong renovation premium identified
- **Impact**: Renovated old homes sell for **$260,066 more** (52.4% premium)
- **Market Opportunity**: 6,793 unrenovated old properties available
- **Correlation**: 0.26 between renovation status and price

### 📅 Seasonal Strategy (Hypothesis 2)
- **Result**: ✅ **VALIDATED** - Measurable seasonal advantage
- **Impact**: Peak season commands **$26,850 premium** (5.1% higher)
- **Volume**: 76% higher sales activity during peak months
- **Pattern**: Consistent seasonal pricing trends across all property types

### 🏙️ Location Strategy (Hypothesis 3)
- **Result**: ❌ **HYPOTHESIS REJECTED** - Contrary to expectations
- **Key Insight**: Old houses in dense areas cost **$192,175 MORE** (32.5% premium)
- **Implication**: Dense areas represent premium markets, not value opportunities
- **Strategic Pivot**: Target high-density areas for luxury renovations

## Data Description

### Dataset Information
- **Source**: King County house sales database
- **Time Period**: May 2014 - May 2015
- **Records**: 21,597 transactions
- **Features**: 21 variables including price, location, property characteristics


```

## Installation and Setup

### Requirements
- Python 3.8+
- Jupyter Notebook
- Required packages listed in `requirements.txt`

### Installation Steps
```bash
# Clone the repository
git clone https://github.com/mauriciosalazar/ds-eda-project.git
cd ds-eda-project

# Create virtual environment
python -m venv eda-env
source eda-env/bin/activate  # On Windows: eda-env\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Launch Jupyter Notebook
jupyter notebook
```

### Dependencies
```
pandas>=1.3.0
numpy>=1.21.0
matplotlib>=3.4.0
seaborn>=0.11.0
jupyter>=1.0.0
```
