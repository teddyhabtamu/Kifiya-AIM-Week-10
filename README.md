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
<<<<<<< task-2
=======

## Task 2

### Adapt the Knowledge from Task 1.1 to Analyze Brent Oil Prices

Build on the foundational understanding of time series analysis developed in Task 1.1. Apply this knowledge to analyze the historical Brent oil prices data.

### Utilize Additional Statistical and Econometric Models as Needed to Refine the Analysis

1. **Vector Autoregression (VAR)**
   - **Purpose**: To analyze multivariate time series data and capture the linear interdependencies among multiple time series.
   - **Implementation**:
     ```python
     from statsmodels.tsa.api import VAR

     # Assuming you have additional economic indicators data
     data = pd.read_csv('brent_oil_prices_with_indicators.csv')
     model = VAR(data)
     results = model.fit(maxlags=15, ic='aic')
     print(results.summary())
     ```

2. **Markov-Switching ARIMA**
   - **Purpose**: To capture different market conditions by allowing parameters to switch between different regimes.
   - **Implementation**:
     ```python
     from statsmodels.tsa.regime_switching.markov_regression import MarkovRegression

     data = pd.read_csv('brent_oil_prices.csv')
     model = MarkovRegression(data['Price'], k_regimes=2, trend='c', switching_variance=True)
     results = model.fit()
     print(results.summary())
     ```

3. **LSTM (Long Short-Term Memory) Networks**
   - **Purpose**: To capture complex patterns and dependencies in the data using deep learning.
   - **Implementation**:
     ```python
     import numpy as np
     import pandas as pd
     from keras.models import Sequential
     from keras.layers import LSTM, Dense
     from sklearn.preprocessing import MinMaxScaler

     # Load and preprocess data
     data = pd.read_csv('brent_oil_prices.csv')
     scaler = MinMaxScaler(feature_range=(0, 1))
     scaled_data = scaler.fit_transform(data['Price'].values.reshape(-1, 1))

     # Prepare data for LSTM
     def create_dataset(data, time_step=1):
         X, Y = [], []
         for i in range(len(data) - time_step - 1):
             a = data[i:(i + time_step), 0]
             X.append(a)
             Y.append(data[i + time_step, 0])
         return np.array(X), np.array(Y)

     time_step = 10
     X, Y = create_dataset(scaled_data, time_step)
     X = X.reshape(X.shape[0], X.shape[1], 1)

     # Build LSTM model
     model = Sequential()
     model.add(LSTM(50, return_sequences=True, input_shape=(time_step, 1)))
     model.add(LSTM(50, return_sequences=False))
     model.add(Dense(25))
     model.add(Dense(1))
     model.compile(optimizer='adam', loss='mean_squared_error')

     # Train the model
     model.fit(X, Y, batch_size=1, epochs=1)
     ```

### Explore Other Potential Factors Influencing Oil Prices

1. **Economic Indicators**
   - **GDP, Inflation Rates, Unemployment Rates, Exchange Rates**:
     ```python
     import pandas as pd
     import seaborn as sns
     import matplotlib.pyplot as plt

     data = pd.read_csv('brent_oil_prices_with_indicators.csv')
     sns.pairplot(data)
     plt.show()
     ```

2. **Technological Changes**
   - **Advancements in Extraction Technologies, Renewable Energy Developments, Efficiency Improvements**:
     ```python
     # Analyze the impact of technological changes
     # This would typically involve gathering additional data and performing correlation analysis
     ```

3. **Political and Regulatory Factors**
   - **Environmental Regulations, Trade Policies**:
     ```python
     # Analyze the impact of political and regulatory factors
     # This would typically involve gathering additional data and performing correlation analysis
     ```

### Adapting the Model to a New Scenario

1. **Apply the Analysis Framework to Different Scenarios or Related Datasets**
   - Extend the analysis to other commodities or related markets, such as natural gas or coal.
   - Compare and contrast the factors influencing different energy markets.

2. **Extend the Model to Incorporate New Variables or Data Sources**
   - Integrate additional data sources such as economic reports, technological advancements, and regulatory changes.
   - Include macroeconomic variables and indices to enhance the model’s predictive power.

3. **Validate the Model’s Performance in Predicting Future Price Movements and Other Outcomes**
   - Backtest the model using historical data to assess its accuracy and robustness.
   - Conduct out-of-sample testing to validate the model’s predictive capabilities.
   - Use cross-validation techniques to ensure the model’s generalizability.

### Suggested Approach

1. **Data Collection**
   - Gather comprehensive datasets on economic indicators, technological changes, and political factors.
   - Utilize reliable sources such as the World Bank, IMF, IEA, and industry reports.

2. **Data Preprocessing**
   - Clean and preprocess the data to ensure consistency and accuracy.
   - Handle missing values, outliers, and anomalies appropriately.

3. **Exploratory Data Analysis (EDA)**
   - Perform EDA to identify patterns, trends, and relationships in the data.
   - Use visualizations to gain insights into the interactions between different variables and oil prices.

4. **Model Building**
   - Develop multiple models to capture different aspects of the data.
   - Use time series models, econometric models, and machine learning algorithms as appropriate.

5. **Model Evaluation**
   - Evaluate the models using performance metrics such as RMSE, MAE, and R-squared.
   - Compare the models to identify the best-performing ones.

6. **Insight Generation**
   - Interpret the model outputs to generate actionable insights.
   - Provide clear recommendations based on the analysis results.

## Task 3

### Developing an Interactive Dashboard for Data Analysis Results

Build a Dashboard Application using Flask (backend) and React (frontend) to visualize the results of the analysis, helping stakeholders explore how various events affect Brent oil prices.

### Key Components of the Dashboard

#### Backend (Flask)

1. **Develop APIs**:
   - Serve data from the analysis results, making it accessible for the React frontend.
   - Handle requests for different datasets, model outputs, and performance metrics.
   - Integrate data sources for real-time updates (optional, if necessary).
