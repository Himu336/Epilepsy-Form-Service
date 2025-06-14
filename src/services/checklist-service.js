const ChecklistRepository = require('../repositories/checklist-repository');

class ChecklistService {
  async createChecklist(data) {
    // Add any preprocessing or validation here
    return await ChecklistRepository.create(data);
  }

  async getChecklistsByPatient(patient_id) {
    return await ChecklistRepository.findAllByPatientId(patient_id);
  }

  async getChecklist(id) {
    return await ChecklistRepository.findById(id);
  }
}

module.exports = new ChecklistService();
