const createStudentFormDefinition = [
    { name: "firstname", label: "Primer Nombre", required: true, autoFocus: true, componentType: "text", type: "text", grid: { xs: 12, sm: 6 } },
    { name: "birthdate", label: "Birth Date", componentType: "date", grid: { xs: 12 } },
    ...
];

module.exports = createStudentFormDefinition;