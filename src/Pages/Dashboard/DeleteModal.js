import React from 'react';

const DeleteModal = ({doctor}) => {
      const {name} = doctor
      return (
            <>

                  


                  <input type="checkbox" id="delete-modal" class="modal-toggle" />
                  <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                              <h3 class="font-bold text-lg">Are You Sure Delete {name}?</h3>
                              <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                              <div class="modal-action">
                                    <label for="delete-modal" class="btn">Yay!</label>
                              </div>
                        </div>
                  </div>

            </>
      );
};

export default DeleteModal;