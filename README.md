# Kifiya-AIM-Week-10

Change point analysis and statistical modelling of time series data - detecting changes and associating causes on time series data

## Business Objective

The main goal of this analysis is to study how important events affect Brent oil prices. This will focus on finding out how changes in oil prices are linked to big events like political decisions, conflicts in oil-producing regions, global economic sanctions, and changes in Organization of the Petroleum Exporting Countries (OPEC) policies. The aim is to provide clear insights that can help investors, analysts, and policymakers understand and react to these price changes better.

## Situational Overview (Business Need)

You are a data scientist at Birhan Energies, a leading consultancy firm specialising in providing data-driven insights and strategic advice to stakeholders in the energy sector. With a mission to help clients navigate the complexities of the global energy market, Birhan Energies focuses on delivering actionable intelligence that supports decision-making processes for investors, policymakers, and energy companies.

You are tasked with analyzing how big political and economic events affect Brent oil prices. Understand how political decisions, conflicts in oil-producing areas, international sanctions, and OPEC policy changes affect the market.

The oil market is very unstable. This makes it hard for investors to make good decisions, manage risks, and maximize returns. Policymakers need detailed analysis to create strategies for economic stability and energy security. Energy companies need accurate price forecasts to plan operations, control costs, and secure supply chains.

As a data analyst at Birhan Energies, you are tasked with:
- Finding key events that have significantly impacted Brent oil prices over the past decade.
- Measuring how much these events affect price changes.
- Providing clear, data-driven insights to guide investment strategies, policy development, and operational planning.

## Data

The data set contains historical Brent oil prices. It includes daily prices from May 20, 1987, to September 30, 2022.

### Data Fields

- **Date**: Represents the date of the recorded Brent oil price. Each entry is formatted as ‘day-month-year’ (e.g., 20-May-87). The dataset covers daily prices from May 20, 1987, to September 30, 2022.
- **Price**: This column represents the price of Brent oil on the corresponding date. The price is recorded in USD per barrel.

## Tasks Completed

Tasks focuse on defining the data analysis workflow and understanding the model and data. This involves planning the analysis steps needed to achieve the project’s objective and ensuring a clear understanding of the key concepts related to the project.

### Defining the Data Analysis Workflow

1. **Data Collection and Preprocessing**
   - **Collect Data**: Gather historical Brent oil prices data from May 20, 1987, to September 30, 2022.
   - **Data Cleaning**: Handle missing values, outliers, and ensure data consistency.
   - **Data Transformation**: Convert date formats, normalize prices if necessary, and create any additional features required for analysis.

2. **Exploratory Data Analysis (EDA)**
   - **Descriptive Statistics**: Calculate mean, median, standard deviation, and other relevant statistics.
   - **Visualization**: Plot time series graphs, histograms, and box plots to understand data distribution and trends.
   - **Correlation Analysis**: Identify correlations between different variables.

3. **Model Selection and Training**
   - **Model Selection**: Choose appropriate time series models such as ARIMA, GARCH, or other relevant models.
   - **Parameter Tuning**: Use techniques like grid search or cross-validation to find the best parameters for the models.
   - **Model Training**: Train the selected models on the historical data.

4. **Change Point Detection**
   - **Algorithm Selection**: Choose algorithms for change point detection such as PELT, Binary Segmentation, or Bayesian methods.
   - **Implementation**: Apply the chosen algorithms to detect significant changes in the time series data.

5. **Impact Analysis**
   - **Event Identification**: Identify key political and economic events that could impact Brent oil prices.
   - **Impact Measurement**: Quantify the impact of these events on oil prices using statistical tests or model-based approaches.

6. **Result Interpretation and Communication**
   - **Interpret Results**: Analyze the model outputs and change points to draw meaningful conclusions.
   - **Visualization**: Create visualizations to effectively communicate findings.
   - **Reporting**: Prepare detailed reports and presentations for stakeholders.

### Understanding the Model and Data

1. **Reading References**
   - **Literature Review**: Read academic papers, articles, and books related to time series analysis and change point detection.
   - **Model Documentation**: Review documentation for ARIMA, GARCH, and other models to understand their applications and limitations.

2. **Model Familiarization**
   - **ARIMA (AutoRegressive Integrated Moving Average)**: Understand how ARIMA models work, including concepts like differencing, autoregression, and moving averages.
   - **GARCH (Generalized Autoregressive Conditional Heteroskedasticity)**: Learn about GARCH models for modeling volatility in time series data.

3. **Model Application**
   - **Purpose**: Use ARIMA for forecasting future prices and GARCH for modeling price volatility.
   - **Data Generation Processes**: Understand how historical events and market conditions generate the observed data patterns.
   - **Model Inputs and Outputs**: Identify inputs (e.g., past prices, external events) and expected outputs (e.g., forecasted prices, volatility estimates).

4. **Assumptions and Limitations**
   - **Assumptions**: State assumptions such as stationarity, normality, and independence of residuals.
   - **Limitations**: Acknowledge limitations like model sensitivity to parameter changes, potential overfitting, and data quality issues.

5. **Communication Channels**
   - **Stakeholder Communication**: Determine the best formats (e.g., reports, dashboards, presentations) and channels (e.g., meetings, emails) for communicating results to stakeholders.
