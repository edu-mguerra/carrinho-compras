export const formatCurrenct = (valeu, currency) => {
  return valeu.toLocaleString('pt-br',{ style: 'currency',  currency})
}