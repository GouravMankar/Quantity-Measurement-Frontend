# Quantity Measurement Application - Frontend

This is the frontend of the Quantity Measurement Application built using Angular.  
The application allows users to perform unit conversions and manage measurement-related data through a clean and responsive UI.

## Tech Stack

- Angular
- TypeScript
- HTML
- CSS
- Bootstrap
- REST API Integration

## Features

- User-friendly interface for unit conversion
- Support for multiple measurement types (Length, Weight, Volume, etc.)
- Real-time conversion results
- Responsive design (mobile + desktop)
- Integration with backend APIs
- Clean component-based architecture

## Project Structure

```text
src/
 └── app/
     ├── core/
     │   ├── services/
     │   └── interceptors/
     ├── features/
     │   ├── conversion/
     │   ├── dashboard/
     │   └── history/
     ├── shared/
     │   ├── components/
     │   └── models/
     ├── app.component.ts
     ├── app.routes.ts
     └── app.config.ts