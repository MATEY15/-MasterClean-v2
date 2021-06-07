import 'select2';
// npm i select2

$(".sort-select").select2({
    minimumResultsForSearch: -1,
    dropdownCssClass: "check-city__drop",
    containerCssClass: "sort-select",
});

$(".check-city__select").select2({
    minimumResultsForSearch: -1,
    dropdownCssClass: "check-city__drop check-city__drop--style",
    containerCssClass: "sort-select",
});